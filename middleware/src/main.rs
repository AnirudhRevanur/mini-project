use actix_web::{web, App, HttpResponse, HttpServer, Responder};
use reqwest;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
struct BackendResponse {
    message: String,
}

async fn handle_frontend_request() -> impl Responder {
    HttpResponse::Ok().json(BackendResponse {
        message: "Handled by Rust middleware".to_string(),
    })
}

async fn forward_to_backend() -> impl Responder {
    let backend_url = "http://localhost:8082/testing";
    let response = reqwest::get(backend_url).await;

    match response {
        Ok(res) => {
            let body = res.text().await.unwrap_or_else(|_| "Error".to_string());
            HttpResponse::Ok().body(body)
        }
        Err(_) => HttpResponse::InternalServerError().body("Backend Error"),
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .route("/", web::get().to(handle_frontend_request))
            .route("/backend", web::get().to(forward_to_backend))
    })
    .bind("127.0.0.1:8081")?
    .run()
    .await
}
