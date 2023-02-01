use crate::avatar_utils::*;

pub const ELEMENTS: usize = 4;
pub const SIZE: usize = 80;

pub fn generate_colors(name: &str, colors: Vec<&str>) -> Vec<GeneratedColor> {
    let mut generated_colors: Vec<GeneratedColor> = vec![];
    let num_from_name = hash_code(name);

    for i in 0..ELEMENTS {
        let index = i as i64;
        generated_colors.push(GeneratedColor {
            color: get_random_color(num_from_name + index, &colors, colors.len() as i64)
                .to_string(),
            translate_x: get_unit_with_index(
                num_from_name * (index + 1),
                (SIZE as i64 / 2) - (index + 17),
                1,
            ),
            translate_y: get_unit_with_index(
                num_from_name * (index + 1),
                (SIZE as i64 / 2) - (index + 17),
                2,
            ),
            rotate: get_unit(num_from_name * (index + 1), 360),
            is_square: get_boolean(num_from_name, 2),
        });
    }

    generated_colors
}

#[derive(Debug, Clone)]
pub struct GeneratedColor {
    pub color: String,
    pub translate_x: i64,
    pub translate_y: i64,
    pub rotate: i64,
    pub is_square: bool,
}

pub fn get_square_transform(generated_colors: Vec<GeneratedColor>) -> String {
    format!(
        "translate({} {}) rotate({} {} {})",
        generated_colors[1].translate_x,
        generated_colors[1].translate_y,
        generated_colors[1].rotate,
        SIZE / 2,
        SIZE / 2
    )
}

pub fn get_circle_transform(generated_colors: Vec<GeneratedColor>) -> String {
    format!(
        "translate({} {})",
        generated_colors[2].translate_x, generated_colors[2].translate_y,
    )
}

pub fn get_line_transform(generated_colors: Vec<GeneratedColor>) -> String {
    format!(
        "translate({} {}) rotate({} {} {})",
        generated_colors[3].translate_x,
        generated_colors[3].translate_y,
        generated_colors[3].rotate,
        SIZE / 2,
        SIZE / 2
    )
}
