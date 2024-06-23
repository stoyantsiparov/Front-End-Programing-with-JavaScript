function loadingBar(progress) {
    let renderProgressBar = progress => `[${'%'.repeat(progress / 10)}${'.'.repeat(10 - progress / 10)}]`;
    let renderProgress = progress => `${progress}% ${renderProgressBar(progress)}`;
    let isCompleted = progress === 100;

    console.log(renderProgress(progress));
    // Бърза {if} проверка с операторите {?}->{if true} {:}->{if false}
    console.log(isCompleted ? "Complete!" : "Still loading...");
}

loadingBar(30);

loadingBar(50);

loadingBar(100);