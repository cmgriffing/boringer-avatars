use crate::components::avatar_utils::*;

pub const SIZE: usize = 80;
pub const ELEMENTS: usize = 4;

pub fn generate_colors(name: &str, colors: Vec<&str>) -> Vec<String> {
    let num_from_name = hash_code(name);
    let range = colors.len();

    let mut generated_colors: Vec<String> = vec![];

    for i in 0..ELEMENTS {
        generated_colors.push(get_random_color(
            num_from_name + i as i64,
            &colors,
            range as i64,
        ));
    }

    generated_colors
}
