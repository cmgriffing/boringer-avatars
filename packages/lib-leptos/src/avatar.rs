use crate::avatar_bauhaus::*;
use crate::avatar_beam::*;
use crate::avatar_marble::*;
use crate::avatar_pixel::*;
use crate::avatar_ring::*;
use crate::avatar_sunset::*;
use crate::avatar_utils::*;
use leptos::*;

#[component]
pub fn Avatar(
    cx: Scope,
    variant: Variant,
    name: String,
    colors: Vec<&'static str>,
    #[prop(optional, into)] square: Option<bool>,
) -> impl IntoView {
    let is_square = if square.is_some() {
        square.unwrap()
    } else {
        false
    };

    let avatar_variant = match variant {
        Variant::Bauhaus => view! {
            cx,
             <div><AvatarBauhaus name=name colors=colors.clone() square=is_square /></div>
        },

        Variant::Beam => view! {
            cx,
             <div><AvatarBeam name=name colors=colors.clone() square=is_square /></div>
        },

        Variant::Marble => view! {
            cx,
             <div><AvatarMarble name=name colors=colors.clone() square=is_square /></div>
        },

        Variant::Pixel => view! {
            cx,
             <div><AvatarPixel name=name colors=colors.clone() square=is_square /></div>
        },

        Variant::Ring => view! {
            cx,
             <div><AvatarRing name=name colors=colors.clone() square=is_square /></div>
        },

        Variant::Sunset => view! {
            cx,
             <div><AvatarSunset name=name colors=colors.clone() square=is_square /></div>
        },
    };

    view! { cx,
        {avatar_variant}
    }
}
