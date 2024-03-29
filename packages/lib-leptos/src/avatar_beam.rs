use crate::avatar_beam_utils::*;
use crate::avatar_utils::*;

use leptos::*;

#[component]
pub fn AvatarBeam(
    cx: Scope,
    name: String,
    colors: Vec<&'static str>,
    square: bool,
) -> impl IntoView {
    let num_from_name = hash_code(&name);
    let generated_data = generate_data(&name, colors);

    let outer_radius = if square == true { 0.0 } else { (SIZE as f64) * 2.0 };
    let face_radius = if generated_data.clone().is_circle {SIZE } else {SIZE / 6};
    let left_eye_x = 14 - generated_data.eye_spread;
    let right_eye_x = 20 + generated_data.eye_spread;

    let mouth =
      if !generated_data.clone().is_mouth_open {
        view! {
          cx,
          <path
            d=get_closed_mouth_data(generated_data.clone())
            fill=generated_data.clone().face_color
          />
        }
      } else {
        view! {
          cx,
          <path
            fill="none"
            strokeLinecap="round"
            d=get_open_mouth_data(generated_data.clone())
            stroke=generated_data.clone().face_color
          />
        }
      };


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
        id=format!("mask__beam_{}", num_from_name)
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

      <g mask=format!("url(#mask__beam_{})", num_from_name)>
        <rect
          width=SIZE
          height=SIZE
          fill=generated_data.clone().background_color
        />

        <rect
          x="0"
          y="0"
          width=SIZE
          height=SIZE
          transform=get_rect_transform(generated_data.clone())
          fill=generated_data.clone().wrapper_color
          rx=face_radius
        />

        <g transform=get_group_transform(generated_data.clone())>

          {mouth}

          <rect
            stroke="none"
            x=left_eye_x
            y=14
            width=1.5
            height=2
            rx=1
            fill=generated_data.clone().face_color
          />

          <rect
            stroke="none"
            x=right_eye_x
            y=14
            width=1.5
            height=2
            rx=1
            fill=generated_data.clone().face_color
          />
        </g>
      </g>
    </svg>
    }
}
