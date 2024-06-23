function solve(input) {
    let message = input.shift();

    let commands = input.shift();
    while (commands !== "Buy") {
        let [command, substring, replacement] = commands.split("?");

        switch (command) {
            case "TakeEven":
                message = takeEven(message);
                break;
            case "ChangeAll":
                message = changeAll(message, substring, replacement);
                break;
            case "Reverse":
                message = reverse(message, substring);
                break;
        }

        commands = input.shift();
    }

    console.log(`The cryptocurrency is: ${message}`);

    function takeEven(message) {
        let updatedMessage = '';
        for (let i = 0; i < message.length; i += 2) {
            updatedMessage += message[i];
        }
        console.log(updatedMessage);
        return updatedMessage;
    }

    function changeAll(message, substring, replacement) {
        message = message.split(substring).join(replacement);
        console.log(message);
        return message;
    }

    function reverse(message, substring) {
        if (message.includes(substring)) {
            let reversedSubstring = substring.split("").reverse().join("");
            message = message.replace(substring, "");
            message += reversedSubstring;
            console.log(message);
        } else {
            console.log("error");
        }
        return message;
    }
}


solve((["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs",
    "TakeEven",
    "Reverse?!nzahc",
    "ChangeAll?m?g",
    "Reverse?adshk",
    "ChangeAll?z?i",
    "Buy"]));

solve((["PZDfA2PkAsakhnefZ7aZ",
    "TakeEven",
    "TakeEven",
    "TakeEven",
    "ChangeAll?Z?X",
    "ChangeAll?A?R",
    "Reverse?PRX",
    "Buy"]));