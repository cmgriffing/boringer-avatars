use crate::avatar_sunset_utils::*;
use crate::avatar_utils::*;
use leptos::*;

#[component]
pub fn AvatarSunset(
    cx: Scope,
    name: String,
    colors: Vec<&'static str>,
    square: bool,
) -> impl IntoView {
    let num_from_name = hash_code(&name);
    let generated_colors = generate_colors(&name, colors);

    view! { cx,
      <svg
        fill="none"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={format!("0 0 {} {}",  SIZE, SIZE)}
        width={200}
        height={200}
      >
        <mask
        id={format!("mask__sunset_{}", num_from_name)}
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

        <g mask={format!("url(#mask__sunset_{})", num_from_name)}>
          <path d="M0 0h80v40H0z" fill={format!("url(#gradient_paint0_linear_{})", num_from_name)} />
          <path d="M0 40h80v40H0z" fill={format!("url(#gradient_paint1_linear_{})", num_from_name)} />
        </g>

        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={format!("gradient_paint0_linear_{}", num_from_name)}
            x1={SIZE / 2}
            y1={0}
            x2={SIZE / 2}
            y2={SIZE / 2}
          >
            <stop stop-color={generated_colors[0].clone()} />

            <stop
              offset={1}
              stop-color={generated_colors[1].clone()}
            />
          </linearGradient>

          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={format!("gradient_paint1_linear_{}", num_from_name)}
            x1={SIZE / 2}
            y1={SIZE / 2}
            x2={SIZE / 2}
            y2={SIZE}
          >
            <stop stop-color={generated_colors[2].clone()} />

            <stop
              offset={1}
              stop-color={generated_colors[3].clone()}
            />
          </linearGradient>
        </defs>


      </svg>
    }
}
