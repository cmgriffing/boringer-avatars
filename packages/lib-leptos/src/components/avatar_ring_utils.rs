use crate::components::avatar_utils::*;

pub const SIZE: usize = 90;
pub const COLORS: usize = 5;

pub fn generate_colors(name: &str, colors: Vec<&str>) -> Vec<String> {
    let num_from_name = hash_code(name);
    let range = colors.len();

    let mut generated_colors: Vec<String> = vec![];

    for i in 0..COLORS {
        generated_colors.push(get_random_color(
            num_from_name + i as i64,
            &colors,
            range as i64,
        ));
    }

    let mut oddly_generated_colors: Vec<String> = vec![];

    oddly_generated_colors.push(generated_colors[0].clone());
    oddly_generated_colors.push(generated_colors[1].clone());
    oddly_generated_colors.push(generated_colors[1].clone());
    oddly_generated_colors.push(generated_colors[2].clone());
    oddly_generated_colors.push(generated_colors[2].clone());
    oddly_generated_colors.push(generated_colors[3].clone());
    oddly_generated_colors.push(generated_colors[3].clone());
    oddly_generated_colors.push(generated_colors[0].clone());
    oddly_generated_colors.push(generated_colors[4].clone());

    oddly_generated_colors
}
