#[tauri::command]
fn app_status()->String{"WRE Revu Assistant B01 ready".into()}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run(){tauri::Builder::default().invoke_handler(tauri::generate_handler![app_status]).run(tauri::generate_context!()).expect("error while running WRE Revu Assistant");}