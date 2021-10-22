import { textAnalyzer } from '../src/client/js/textAnalyzer'

describe("Testing the submit functionality", () => {
    test("Testing textAnalyzer() function", () => {
        expect(textAnalyzer).toBeDefined();
    })
})