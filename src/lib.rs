mod utils;
use sight_lang::typing::type_term_with_source;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn type_source(source: &str) -> Option<String> {
    use sight_lang::parser::parse;
    wasm_logger::init(wasm_logger::Config::default());

    let term = parse(source).unwrap();
    let ty = type_term_with_source(term, source)?;
    Some(format!("Type = {ty:?}"))
}
