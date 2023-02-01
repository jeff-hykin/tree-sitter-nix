#!/usr/bin/env -S deno run --allow-all
import { Parser, parserFromWasm } from "https://deno.land/x/deno_tree_sitter@0.0.3/main.js"
import { stringToBytes } from "https://deno.land/x/binaryify@0.0.6/tools.js"

import binaryStringForTreeSitterNixWasm from "./tree-sitter-nix.wasm.binaryified.js"
const uint8ArrayForTreeSitterNixWasm = stringToBytes(binaryStringForTreeSitterNixWasm)

const parser = await parserFromWasm(uint8ArrayForTreeSitterNixWasm)
export const parse = parser.parse