use crate::avatar_marble_utils::*;
use crate::avatar_utils::*;
use leptos::*;

#[component]
pub fn AvatarMarble(
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
        id={format!("mask__marble_{}", num_from_name)}
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

        <g mask={format!("url(#mask__marble_{})", num_from_name)}>
          <rect
            width={SIZE}
            height={SIZE}
            fill={generated_colors[0].color.clone()}
          />

          <path
            filter="url(#prefix__filter0_f)"
            d="M32.414 59.35L50.376 70.5H72.5v-71H33.728L26.5 13.381l19.057 27.08L32.414 59.35z"
            fill={generated_colors[1].color.clone()}
            transform={get_path_one_transform(generated_colors.clone())}
          />

          <path
            filter="url(#prefix__filter0_f)"
            d="M22.216 24L0 46.75l14.108 38.129L78 86l-3.081-59.276-22.378 4.005 12.972 20.186-23.35 27.395L22.215 24z"
            style="mixBlendMode: overlay"
            fill={generated_colors[2].color.clone()}
            transform={get_path_two_transform(generated_colors.clone())}
          />
        </g>

        <defs>
          <filter
            id="prefix__filter0_f"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood result="BackgroundImageFix" floodOpacity={0} />

            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />

            <feGaussianBlur result="effect1_foregroundBlur" stdDeviation={7} />
          </filter>
        </defs>
      </svg>
    }
}
