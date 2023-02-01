use crate::components::avatar_utils::*;

pub const SIZE: usize = 80;
pub const ELEMENTS: usize = 64;

#[derive(Debug, Clone)]
pub struct GeneratedColor {
    pub index: usize,
    pub color: String,
}

pub fn generate_colors(name: &str, colors: Vec<&str>) -> Vec<GeneratedColor> {
    let num_from_name = hash_code(name);
    let range = colors.len();

    let mut generated_colors: Vec<GeneratedColor> = vec![];

    for i in 0..ELEMENTS {
        generated_colors.push(GeneratedColor {
            color: get_random_color(num_from_name + i as i64, &colors, range as i64),
            index: i,
        });
    }

    generated_colors
}
