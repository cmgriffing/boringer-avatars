use leptos::*;
use leptos_meta::*;
use leptos_router::*;

use crate::components::avatar::*;
use crate::components::avatar_utils::*;

#[component]
pub fn App(cx: Scope) -> impl IntoView {
    // Provides context that manages stylesheets, titles, meta tags, etc.
    provide_meta_context(cx);

    view! {
        cx,

        // injects a stylesheet into the document <head>
        // id=leptos means cargo-leptos will hot-reload this stylesheet
        <Stylesheet id="leptos" href="/pkg/leptos_start.css"/>

        // sets the document title
        <Title text="Welcome to Leptos"/>

        // content for this welcome page
        <Router>
            <main>
                <Routes>
                    <Route path="" view=|cx| view! { cx, <HomePage/> }/>
                </Routes>
            </main>
        </Router>
    }
}

/// Renders the home page of your application.
#[component]
fn HomePage(cx: Scope) -> impl IntoView {
    let colors = vec!["#FFAD08", "#EDD75A", "#73B06F", "#0C8F8F", "#405059"];

    view! { cx,
        <h1>"Welcome to Leptos!"</h1>
        <div class="row">
        <Avatar variant={Variant::Bauhaus} name={"foo".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Bauhaus} name={"foooo".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Bauhaus} name={"fooo".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Bauhaus} name={"is".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Bauhaus} name={"this".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Bauhaus} name={"really".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Bauhaus} name={"working".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Bauhaus} name={"working2".to_string()} colors={colors.clone()} />

        <Avatar variant={Variant::Beam} name={"foo".to_string()} colors={colors.clone()} square={false} />
        <Avatar variant={Variant::Beam} name={"foooo".to_string()} colors={colors.clone()} square={true} />
        <Avatar variant={Variant::Beam} name={"fooo".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Beam} name={"is".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Beam} name={"this".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Beam} name={"really".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Beam} name={"working".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Beam} name={"working2".to_string()} colors={colors.clone()} />


        <Avatar variant={Variant::Marble} name={"foo".to_string()} colors={colors.clone()} square={false} />
        <Avatar variant={Variant::Marble} name={"foooo".to_string()} colors={colors.clone()} square={true} />
        <Avatar variant={Variant::Marble} name={"fooo".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Marble} name={"is".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Marble} name={"this".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Marble} name={"really".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Marble} name={"working".to_string()} colors={colors.clone()} />
        <Avatar variant={Variant::Marble} name={"working2".to_string()} colors={colors.clone()} />
        </div>
    }
}
