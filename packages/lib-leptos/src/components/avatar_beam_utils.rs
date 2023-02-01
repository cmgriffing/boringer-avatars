use crate::components::avatar_utils::*;

pub const SIZE: usize = 36;

#[derive(Debug, Clone)]
pub struct GeneratedData {
    pub wrapper_color: String,
    pub face_color: String,
    pub background_color: String,
    pub wrapper_translate_x: i64,
    pub wrapper_translate_y: i64,
    pub wrapper_rotate: i64,
    pub wrapper_scale: f64,
    pub is_mouth_open: bool,
    pub is_circle: bool,
    pub eye_spread: i64,
    pub mouth_spread: i64,
    pub face_rotate: i64,
    pub face_translate_x: i64,
    pub face_translate_y: i64,
}

pub fn generate_data(name: &str, colors: Vec<&str>) -> GeneratedData {
    let num_from_name = hash_code(name);
    let range = colors.len() as i64;
    let wrapper_color = get_random_color(num_from_name, &colors, range);

    let pre_translate_x = get_unit_with_index(num_from_name, 10, 1);
    let mut wrapper_translate_x = pre_translate_x;
    if pre_translate_x < 5 {
        wrapper_translate_x = pre_translate_x + ((SIZE / 9) as i64);
    }

    let pre_translate_y = get_unit_with_index(num_from_name, 10, 2);
    let mut wrapper_translate_y = pre_translate_y;
    if pre_translate_y < 5 {
        wrapper_translate_y = pre_translate_y + ((SIZE / 9) as i64);
    }

    let mut face_translate_x = get_unit_with_index(num_from_name, 8, 1);
    if wrapper_translate_x > ((SIZE / 6) as i64) {
        face_translate_x = wrapper_translate_x / 2;
    }

    let mut face_translate_y = get_unit_with_index(num_from_name, 7, 2);
    if wrapper_translate_y > ((SIZE / 6) as i64) {
        face_translate_y = wrapper_translate_y / 2;
    }

    GeneratedData {
        wrapper_color: wrapper_color.clone(),
        face_color: get_contrast(wrapper_color.clone()),
        background_color: get_random_color(num_from_name + 13, &colors, range),
        wrapper_translate_x,
        wrapper_translate_y,
        wrapper_rotate: get_unit(num_from_name, 360),
        wrapper_scale: 1.0 + (get_unit(num_from_name, (SIZE / 12) as i64) as f64) / 10.0,
        is_mouth_open: get_boolean(num_from_name, 2),
        is_circle: get_boolean(num_from_name, 1),
        eye_spread: get_unit(num_from_name, 5),
        mouth_spread: get_unit(num_from_name, 3),
        face_rotate: get_unit_with_index(num_from_name, 10, 3),
        face_translate_x,
        face_translate_y,
    }
}

pub fn get_rect_transform(data: GeneratedData) -> String {
    format!(
        "translate({} {}) rotate({} {} {}) scale({})",
        data.wrapper_translate_x,
        data.wrapper_translate_y,
        data.wrapper_rotate,
        SIZE / 2,
        SIZE / 2,
        data.wrapper_scale
    )
}

pub fn get_group_transform(data: GeneratedData) -> String {
    format!(
        "translate({} {}) rotate({} {} {})",
        data.face_translate_x,
        data.face_translate_y,
        data.face_rotate,
        SIZE / 2,
        SIZE / 2
    )
}

pub fn get_open_mouth_data(data: GeneratedData) -> String {
    format!("M15 {} c2 1 4 1 6 0", 19 + data.mouth_spread)
}

pub fn get_closed_mouth_data(data: GeneratedData) -> String {
    format!("M13, {} a1,0.75 0 0,0 10,0", 19 + data.mouth_spread)
}
