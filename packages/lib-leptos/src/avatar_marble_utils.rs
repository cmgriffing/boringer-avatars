use crate::avatar_utils::*;

pub const SIZE: usize = 80;
pub const ELEMENTS: usize = 3;

#[derive(Debug, Clone)]
pub struct GeneratedColor {
    pub color: String,
    pub translate_x: i64,
    pub translate_y: i64,
    pub scale: f64,
    pub rotate: i64,
}

pub fn generate_colors(name: &str, colors: Vec<&str>) -> Vec<GeneratedColor> {
    let num_from_name = hash_code(name);
    let range = colors.len();

    let mut generated_colors: Vec<GeneratedColor> = vec![];

    for i in 0..ELEMENTS {
        generated_colors.push(GeneratedColor {
            color: get_random_color(num_from_name + i as i64, &colors, range as i64),
            translate_x: get_unit_with_index(
                num_from_name * ((i as i64) + 1),
                (SIZE / 10) as i64,
                1,
            ),
            translate_y: get_unit_with_index(
                num_from_name * ((i as i64) + 1),
                (SIZE / 10) as i64,
                2,
            ),
            scale: 1.2
                + (get_unit(num_from_name * ((i + 1) as i64), (SIZE / 20) as i64) as f64) / 10.0,
            rotate: get_unit_with_index(num_from_name * ((i + 1) as i64), 360, 1),
        });
    }

    generated_colors
}

pub fn get_path_one_transform(generated_colors: Vec<GeneratedColor>) -> String {
    format!(
        "translate({} {}) rotate ({} {} {}) scale({})",
        generated_colors[1].translate_x,
        generated_colors[1].translate_y,
        generated_colors[1].rotate,
        SIZE / 2,
        SIZE / 2,
        generated_colors[2].scale
    )
}

pub fn get_path_two_transform(generated_colors: Vec<GeneratedColor>) -> String {
    format!(
        "translate({} {}) rotate({} {} {}) scale({})",
        generated_colors[2].translate_x,
        generated_colors[2].translate_y,
        generated_colors[2].rotate,
        SIZE / 2,
        SIZE / 2,
        generated_colors[2].scale
    )
}
