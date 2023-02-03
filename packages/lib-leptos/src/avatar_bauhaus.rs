use crate::avatar_bauhaus_utils::*;
use crate::avatar_utils::*;
use leptos::*;

#[component]
pub fn AvatarBauhaus(
    cx: Scope,
    name: String,
    colors: Vec<&'static str>,
    #[prop(optional, into)] square: bool,
) -> impl IntoView {
    let num_from_name = hash_code(&name);
    let generated_colors = generate_colors(&name, colors);

    let half_size = SIZE / 2;
    let outer_radius = if square == true { 0.0 } else { (SIZE as f64) * 2.0 };
    let circle_radius = SIZE / 5;
    let rectangle_height= SIZE / 8;
    let rectangle_x = (SIZE - 60) / 2;
    let rectangle_y = (SIZE - 20) / 2;


    view! { cx,
        <svg
            fill="none"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox=format!("0 0 {} {}",SIZE, SIZE)
            width=200
            height=200
        >
            <mask
                id=format!("mask__bauhaus_{}", num_from_name)
                maskUnits="userSpaceOnUse"
                x=0
                y=0
                width=SIZE
                height=SIZE
            >
                <rect
                    fill="#FFFFFF"
                    width=SIZE
                    height=SIZE
                    rx=outer_radius
                />
            </mask>
            <g mask=format!("url(#mask__bauhaus_{})", num_from_name)>
                <rect
                    width=SIZE
                    height=SIZE
                    fill=generated_colors[0].color.clone()
                />

                <rect
                    x=rectangle_x
                    y=rectangle_y
                    width=SIZE
                    height=rectangle_height
                    fill=generated_colors[1].color.clone()
                    transform=get_square_transform(generated_colors.clone())
                />

                <circle
                    cx=half_size
                    cy=half_size
                    fill=generated_colors[2].color.clone()
                    r=circle_radius
                    transform=get_circle_transform(generated_colors.clone())
                />

                <line
                    x1=0
                    y1=half_size
                    x2=SIZE
                    y2=half_size
                    strokeWidth=2
                    stroke=generated_colors[3].color.clone()
                    transform=get_line_transform(generated_colors.clone())
                />
            </g>
        </svg>
    }
}
