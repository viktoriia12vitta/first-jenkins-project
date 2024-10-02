import {test} from "playwright/test";

test.describe("Test Group1", () => { 

    test.beforeAll( async () => { 
        console.log("BeforeAll is executed");
    });

    test.afterAll( async () => { 
        console.log("AfterAll is executed");
    });

    test.beforeEach( async ({ page }) => { 
        console.log("BeforeEach is executed");
    });

    test.afterEach( async ({ page }) => { 
        console.log("AfterEach is executed");
    });

    test("Test Case 1", async ({ page }) => {
      console.log('Test Case 1 is expected');
    });

    test("Test Case 2", async ({ page }) => {
        console.log('Test Case 2 is expected');
    });

    test("Test Case 3", async ({ page }) => {
        console.log('Test Case 3 is expected');
    });

});