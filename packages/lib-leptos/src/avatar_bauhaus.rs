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

    view! { cx,
        <svg
            fill="none"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox={format!("0 0 {} {}",SIZE, SIZE)}
            width={200}
            height={200}
        >
            <mask
                id={format!("mask__bauhaus_{}", num_from_name)}
                maskUnits="userSpaceOnUse"
                x={0}
                y={0}
                width={SIZE}
                height={SIZE}
            >
                <rect
                    fill="#FFFFFF"
                    width={SIZE}
                    height={SIZE}
                    rx={if square == true { 0.0 } else { (SIZE as f64) * 2.0 }}
                />
            </mask>
            <g mask={format!("url(#mask__bauhaus_{})", num_from_name)}>
                <rect
                    width={SIZE}
                    height={SIZE}
                    fill={generated_colors[0].color.clone()}
                />

                <rect
                    x={(SIZE - 60) / 2}
                    y={(SIZE - 20) / 2}
                    width={SIZE}
                    height={SIZE / 8}
                    fill={generated_colors[1].color.clone()}
                    transform={get_square_transform(generated_colors.clone())}
                />

                <circle
                    cx={SIZE / 2}
                    cy={SIZE / 2}
                    fill={generated_colors[2].color.clone()}
                    r={SIZE / 5}
                    transform={get_circle_transform(generated_colors.clone())}
                />

                <line
                    x1={0}
                    y1={SIZE / 2}
                    x2={SIZE}
                    y2={SIZE / 2}
                    strokeWidth={2}
                    stroke={generated_colors[3].color.clone()}
                    transform={get_line_transform(generated_colors.clone())}
                />
            </g>
        </svg>
    }
}
