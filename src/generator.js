const generator = (level=0) => {
    
    //result object contains two important properties
    // result.str is a string representation that can be fed to latex
    // result.unknown is the answer for x
    const result = {};
    
    switch (level) {
        case 0:
            // Math.random() splits one step equations into two cases
            // the first covered here is additive and subtractive one step equations
            if (Math.random() > 0.50) {
                result.firstConstant = Math.floor(Math.random() * 20);
                result.secondConstant = Math.floor(Math.random() * 20);
                if (Math.random() > 0.50) {
                    result.operator = "+";
                } else {
                    result.operator = "-";
                }
                result.str = `x ${result.operator} ${result.firstConstant} = ${result.secondConstant}`;
                result.unknown = (result.operator==="+") ? (result.secondConstant - result.firstConstant) : (result.secondConstant + result.firstConstant)
                return result;
            // This is multiplicative one step equations
            } else {
                result.firstConstant = Math.floor(Math.random() * 20);
                result.unknown = Math.floor(Math.random() * 20);
                result.str = `${result.firstConstant}x = ${result.firstConstant*result.unknown}`
                return result;
            }
    }
}

export default generator;