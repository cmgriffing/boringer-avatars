use crate::avatar_pixel_utils::*;
use crate::avatar_utils::*;
use leptos::svg::Rect;
use leptos::*;

#[component]
pub fn AvatarPixel(
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
        id={format!("mask__pixel_{}", num_from_name)}
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

        <g mask={format!("url(#mask__pixel_{})", num_from_name)}>
          // <For
          //   each= move || {generated_colors.clone().into_iter()}
          //   key= |generated_color| {generated_color.index}
          //   view= move |generated_color| {
          //     view! {
          //       cx,
          //         <leptos::svg::Rect
          //           x={generated_color.index / 8 * 10}
          //           y={generated_color.index % 8 * 10}
          //           width={10}
          //           height={10}
          //           fill={generated_color.color}
          //         />
          //     }
          //   }
          // />
        </g>
      </svg>
    }
}
