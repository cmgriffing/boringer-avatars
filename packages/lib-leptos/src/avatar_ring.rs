use crate::avatar_ring_utils::*;
use crate::avatar_utils::*;
use leptos::*;

#[component]
pub fn AvatarRing(
    cx: Scope,
    name: String,
    colors: Vec<&'static str>,
    square: bool,
) -> impl IntoView {
    let num_from_name = hash_code(&name);
    let generated_colors = generate_colors(&name, colors);

    let outer_radius = if square == true { 0.0 } else { (SIZE as f64) * 2.0 };

    view! { cx,
      <svg
        fill="none"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox=format!("0 0 {} {}",  SIZE, SIZE)
        width=200
        height=200
      >
        <mask
        id=format!("mask__ring_{}", num_from_name)
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

        <g mask=format!("url(#mask__ring_{})", num_from_name)>

          <path
            d="M0 0h90v45H0z"
            fill=generated_colors[0].clone()
          />

          <path
            d="M0 45h90v45H0z"
            fill=generated_colors[1].clone()
          />

          <path
            d="M83 45a38 38 0 00-76 0h76z"
            fill=generated_colors[2].clone()
          />

          <path
            d="M83 45a38 38 0 01-76 0h76z"
            fill=generated_colors[3].clone()
          />

          <path
            d="M77 45a32 32 0 10-64 0h64z"
            fill=generated_colors[4].clone()
          />

          <path
            d="M77 45a32 32 0 11-64 0h64z"
            fill=generated_colors[5].clone()
          />

          <path
            d="M71 45a26 26 0 00-52 0h52z"
            fill=generated_colors[6].clone()
          />

          <path
            d="M71 45a26 26 0 01-52 0h52z"
            fill=generated_colors[7].clone()
          />

          <circle
            cx=45
            cy=45
            r=23
            fill=generated_colors[8].clone()
          />
        </g>
      </svg>
    }
}
