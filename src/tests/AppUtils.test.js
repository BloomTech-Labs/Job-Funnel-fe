import {validateInputs} from '../utils/AppUtils'
import {isValidPassword} from '../utils/AppUtils'

test("testing validateInputs function to be truthy", async () => {
    const user = {
        first_name: "Austin",
        last_name: "Hadden",
        email: "test@test.com"
    };

    const res = await validateInputs(user);

    expect(res).toBe(true);
});

test.skip("testing validateInputs function to be falsy", async () => {
    const user = {
        first_name: "Austin",
        last_name: "Hadden",
        email: ""
    };

    const res = await validateInputs(user);

    expect(res).toBe(false);
});

test("testing isValidPassword function to be truthy", async () => {
    const pswd = "!F0idjaiwjd";

    const res = await isValidPassword(pswd);

    expect(res).toBe(true);
});

test.skip("testing isValidPassword function to be truthy", async () => {
    const pswd = "pass";

    const res = await isValidPassword(pswd);

    expect(res).toBe(false);
});