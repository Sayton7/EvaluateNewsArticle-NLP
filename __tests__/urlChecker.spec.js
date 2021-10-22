/**
 * @jest-environment jsdom
 */
import { urlChecker } from '../src/client/js/urlChecker'

describe("Testing validating URL", () => {
    test("Testing textAnalyzer() function", () => {
        const input1 = "https://www.nytimes.com/2021/10/22/us/rust-movie-alec-baldwin-shooting.html"
        const input2 = "www.nytimes.com/2021/10/22/us/rust-movie-alec-baldwin-shooting.html"
        expect(urlChecker(input1)).toBe(true);
        expect(urlChecker(input2)).toBe(false);
    })
})