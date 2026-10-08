var asteroidCollision = function(asteroids) {
    const stack = [];

    for (const asteroid of asteroids) {
        let alive = true;

        while (
            alive &&
            stack.length > 0 &&
            stack[stack.length - 1] > 0 &&
            asteroid < 0
        ) {
            const top = stack[stack.length - 1];

            if (top < -asteroid) {
              
                stack.pop();
            } else if (top === -asteroid) {
              
                stack.pop();
                alive = false;
            } else {
           
                alive = false;
            }
        }

        if (alive) {
            stack.push(asteroid);
        }
    }

    return stack;
};
