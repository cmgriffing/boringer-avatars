use std::i64;

pub enum Variant {
    Bauhaus,
    Beam,
    Marble,
    Pixel,
    Ring,
    Sunset,
}

// impl Variant {
//     fn as_str(&self) -> &'static str {
//         match self {
//             Variant::Bauhaus => "bauhaus",
//             Variant::Beam => "beam",
//             Variant::Marble => "marble",
//             Variant::Pixel => "pixel",
//             Variant::Ring => "ring",
//             Variant::Sunset => "sunset",
//         }
//     }
// }

pub fn hash_code(name: &str) -> i64 {
    let mut hash: f64 = 0.0;

    name.chars().for_each(|character: char| {
        let char_code = character as u32 - 48;
        hash = (((hash as i64) << 5) as f64) - hash + (char_code as f64);
    });

    hash.abs() as i64
}

pub fn get_unit(number: i64, range: i64) -> i64 {
    number % range
}

pub fn get_unit_with_index(number: i64, range: i64, index: i64) -> i64 {
    let value = number % range;

    if get_digit(number, index) % 2 == 0 {
        -value
    } else {
        value
    }
}

pub fn get_digit(number: i64, notation: i64) -> i64 {
    let ten: i64 = 10;
    (number / ten.pow(notation as u32)) % 10
}

pub fn get_random_color(number: i64, colors: &Vec<&str>, range: i64) -> String {
    colors[(number % range) as usize].to_string()
}

pub fn get_boolean(number: i64, notation: i64) -> bool {
    get_digit(number, notation) % 2 > 0
}

pub fn get_contrast(base_color: String) -> String {
    let hex_color = base_color.replace("#", "");

    let r = i64::from_str_radix(hex_color.chars().take(2).collect::<String>().as_str(), 16)
        .unwrap_or(0);
    let g = i64::from_str_radix(
        hex_color
            .chars()
            .skip(2)
            .take(2)
            .collect::<String>()
            .as_str(),
        16,
    )
    .unwrap_or(0);
    let b = i64::from_str_radix(
        hex_color
            .chars()
            .skip(4)
            .take(2)
            .collect::<String>()
            .as_str(),
        16,
    )
    .unwrap_or(0);

    let yiq = (r * 299 + g * 587 + b * 114) / 1000;

    if yiq >= 128 {
        "#000000".to_string()
    } else {
        "#FFFFFF".to_string()
    }
}
