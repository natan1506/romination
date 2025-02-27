// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// #[tauri::command]
// use tauri::{command, generate_handler, Builder, generate_context};


// use tauri::Manager;
use std::process::Command;

#[tauri::command]
async fn scrape_games(game_name: String) -> Result<String, String> {
    let output = Command::new("node")
        .arg("../scrape.cjs")
        .arg(&game_name)
        .output()
        .expect("Failed to execute command");

    if output.status.success() {
        let result = String::from_utf8_lossy(&output.stdout);
        Ok(result.to_string())
    } else {
        Err(String::from_utf8_lossy(&output.stderr).to_string())
    }
}


fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![scrape_games])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
