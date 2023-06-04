<script>
    import { onMount } from "svelte";
    import Modal from "./Modal.svelte";
    import CustomInputComponent from '$components/custom-input/custom-input.component.svelte';
    import CustomButtonComponent from '$components/custom-button/custom-button.component.svelte';
    import { setContext } from 'svelte';
    import { BUTTON_COLORS } from "../../enums/button-colors.enum";

    let canvas;
    let ctx;
    let objects = [];
    let activeObject = null;
    let initialPinchDistance = 0;
    let initialScale = 1;
    let backgroundImage = null;

    let showModal = false;
    let text = '';
    let textSize = '';
    let addBackgroundImages;
    let addFloatingImage;

    setContext('modalSubmit', { onSubmit });

    function handleBackgroundUpload(event) {
        const files = event.target.files;
        const fileCount = files.length;

        if (fileCount === 0) return;

        const images = [];

        let loadedCount = 0;

        function loadImage(file, index) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const img = new Image();
                img.onload = function () {
                    images[index] = img;

                    loadedCount++;
                    if (loadedCount === fileCount) {
                        backgroundImage = images; // Assign the array of background images
                        drawObjects();
                    }
                };
                img.src = e.target.result;
            };
            reader.readAsDataURL(file);
        }

        for (let i = 0; i < fileCount; i++) {
            loadImage(files[i], i);
        }
    }

    function handleFileUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                objects.push({ type: "image", img, x: 0, y: 0, scale: 1, dragging: false });
                drawObjects();
            };
            img.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }

    function openModal() {
        showModal = true;
    }

    function drawObjects() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw background images
        if (backgroundImage && backgroundImage.length > 1) {
            const imageHeight = canvas.height / 2;
            let offsetY = 0;

            for (let i = 0; i < backgroundImage.length; i++) {
                const img = backgroundImage[i];
                ctx.drawImage(img, 0, offsetY, canvas.width, imageHeight);
                offsetY += imageHeight;
            }
        } else {
            if (backgroundImage) {
                const img = backgroundImage[0];
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            }
        }

        // Draw other objects
        objects.forEach((obj) => {
            ctx.save();
            ctx.translate(obj.x, obj.y);
            ctx.scale(obj.scale, obj.scale);

            if (obj.type === "image") {
                ctx.drawImage(obj.img, 0, 0);
            } else if (obj.type === "text") {
                ctx.font=`${obj.textSize}px verdana`;
                ctx.shadowColor = "black";
                ctx.lineWidth = 5;
                ctx.strokeStyle = "black";
                ctx.strokeText(obj.text, 0, 0);
                ctx.shadowBlur = 0;
                ctx.fillStyle = "white";
                ctx.fillText(obj.text, 0, 0);
            }

            ctx.restore();
        });
    }

    // function drawObjects() {
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //
    //     // Draw background images
    //     if (backgroundImage && backgroundImage.length > 0) {
    //         const imageHeight = canvas.height;
    //
    //         for (let i = 0; i < backgroundImage.length; i++) {
    //             const img = backgroundImage[i];
    //             const imageWidth = canvas.width / backgroundImage.length;
    //             ctx.drawImage(img, i * imageWidth, 0, imageWidth, imageHeight);
    //         }
    //     }
    //
    //     // Draw other objects
    //     objects.forEach((obj) => {
    //         ctx.save();
    //         ctx.translate(obj.x, obj.y);
    //         ctx.scale(obj.scale, obj.scale);
    //
    //         if (obj.type === "image") {
    //             ctx.drawImage(obj.img, 0, 0);
    //         } else if (obj.type === "text") {
    //             ctx.font = "75px Arial";
    //             ctx.shadowColor = "black";
    //             ctx.fillStyle = "white";
    //             ctx.fillText(obj.text, 0, 0);
    //         }
    //
    //         ctx.restore();
    //     });
    // }

    function handleMouseDown(event) {
        const rect = canvas.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        let foundObject = false;

        objects.forEach((obj) => {
            if (obj.type === "image") {
                if (
                    offsetX >= obj.x &&
                    offsetX <= obj.x + obj.img.width &&
                    offsetY >= obj.y &&
                    offsetY <= obj.y + obj.img.height
                ) {
                    obj.dragging = true;
                    obj.dragStartX = offsetX;
                    obj.dragStartY = offsetY;
                    activeObject = obj;
                    foundObject = true;
                }
            } else if (obj.type === "text") {
                ctx.font = "75px Arial";
                const textMetrics = ctx.measureText(obj.text);
                const textWidth = textMetrics.width;
                const textHeight = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;

                if (
                    offsetX >= obj.x - textWidth / 2 &&
                    offsetX <= obj.x + textWidth / 2 &&
                    offsetY >= obj.y - textHeight &&
                    offsetY <= obj.y
                ) {
                    obj.dragging = true;
                    obj.dragStartX = offsetX;
                    obj.dragStartY = offsetY;
                    activeObject = obj;
                    foundObject = true;
                }
            }
        });

        if (!foundObject) {
            objects.forEach((obj) => {
                obj.dragging = false;
            });
            activeObject = null;
        }
    }

    function handleMouseMove(event) {
        const rect = canvas.getBoundingClientRect();
        const offsetX = event.clientX - rect.left;
        const offsetY = event.clientY - rect.top;

        objects.forEach((obj) => {
            if (obj.dragging) {
                obj.x += offsetX - obj.dragStartX;
                obj.y += offsetY - obj.dragStartY;
                obj.dragStartX = offsetX;
                obj.dragStartY = offsetY;
                drawObjects();
            }
        });
    }

    function handleMouseUp(event) {
        objects.forEach((obj) => {
            obj.dragging = false;
        });
        activeObject = null;
    }

    function handleTouchStart(event) {
        event.preventDefault();
        const rect = canvas.getBoundingClientRect();

        if (event.touches.length === 1) {
            const touchX = event.touches[0].clientX - rect.left;
            const touchY = event.touches[0].clientY - rect.top;

            let foundObject = false;

            objects.forEach((obj) => {
                if (obj.type === "image") {
                    if (
                        touchX >= obj.x &&
                        touchX <= obj.x + obj.img.width &&
                        touchY >= obj.y &&
                        touchY <= obj.y + obj.img.height
                    ) {
                        obj.dragging = true;
                        obj.dragStartX = touchX;
                        obj.dragStartY = touchY;
                        activeObject = obj;
                        foundObject = true;
                    }
                } else if (obj.type === "text") {
                    ctx.font = "75px Arial";
                    const textMetrics = ctx.measureText(obj.text);
                    const textWidth = textMetrics.width;
                    const textHeight = textMetrics.actualBoundingBoxAscent + textMetrics.actualBoundingBoxDescent;

                    if (
                        touchX >= obj.x - textWidth / 2 &&
                        touchX <= obj.x + textWidth / 2 &&
                        touchY >= obj.y - textHeight &&
                        touchY <= obj.y
                    ) {
                        obj.dragging = true;
                        obj.dragStartX = touchX;
                        obj.dragStartY = touchY;
                        activeObject = obj;
                        foundObject = true;
                    }
                }
            });

            if (!foundObject) {
                objects.forEach((obj) => {
                    obj.dragging = false;
                });
                activeObject = null;
            }
        } else if (event.touches.length === 2) {
            const touch1X = event.touches[0].clientX - rect.left;
            const touch1Y = event.touches[0].clientY - rect.top;
            const touch2X = event.touches[1].clientX - rect.left;
            const touch2Y = event.touches[1].clientY - rect.top;

            initialPinchDistance = Math.hypot(touch2X - touch1X, touch2Y - touch1Y);
            initialScale = activeObject ? activeObject.scale : 1;
        }
    }

    function handleTouchMove(event) {
        event.preventDefault();
        const rect = canvas.getBoundingClientRect();

        if (event.touches.length === 1) {
            const touchX = event.touches[0].clientX - rect.left;
            const touchY = event.touches[0].clientY - rect.top;

            objects.forEach((obj) => {
                if (obj.dragging) {
                    obj.x += touchX - obj.dragStartX;
                    obj.y += touchY - obj.dragStartY;
                    obj.dragStartX = touchX;
                    obj.dragStartY = touchY;
                    drawObjects();
                }
            });
        } else if (event.touches.length === 2) {
            const touch1X = event.touches[0].clientX - rect.left;
            const touch1Y = event.touches[0].clientY - rect.top;
            const touch2X = event.touches[1].clientX - rect.left;
            const touch2Y = event.touches[1].clientY - rect.top;

            const currentPinchDistance = Math.hypot(touch2X - touch1X, touch2Y - touch1Y);
            const scale = initialScale * (currentPinchDistance / initialPinchDistance);
            const pivotX = (touch1X + touch2X) / 2;
            const pivotY = (touch1Y + touch2Y) / 2;

            if (activeObject) {
                activeObject.scale = scale;
                activeObject.x = pivotX - (pivotX - activeObject.x) * scale;
                activeObject.y = pivotY - (pivotY - activeObject.y) * scale;
                drawObjects();
            }
        }
    }

    function handleTouchEnd(event) {
        objects.forEach((obj) => {
            obj.dragging = false;
        });
        activeObject = null;
    }

    function onSubmit(event) {
        showModal = false;
        if (text && event) {
            objects.push({ type: "text", text, textSize: textSize ? textSize: 50, x: 150, y: 150, scale: 1, dragging: false });
            drawObjects();
        }
    }

    function download() {
        if (backgroundImage && backgroundImage.length >= 1) {
            let canvasUrl = canvas.toDataURL();
            const createEl = document.createElement('a');
            createEl.href = canvasUrl;

            createEl.download = "download-this-canvas";

            createEl.click();
            createEl.remove();
        }
    }

    onMount(() => {
        canvas = document.getElementById("canvas");
        ctx = canvas.getContext("2d");

        canvas.addEventListener("mousedown", handleMouseDown);
        canvas.addEventListener("mousemove", handleMouseMove);
        canvas.addEventListener("mouseup", handleMouseUp);

        canvas.addEventListener("touchstart", handleTouchStart);
        canvas.addEventListener("touchmove", handleTouchMove);
        canvas.addEventListener("touchend", handleTouchEnd);
    });
</script>

<style>
    canvas {
        border: 2px solid black;
    }
</style>

<div class="ml-auto mr-auto mb-4">
    <canvas id="canvas" width="350" height="350"></canvas>
</div>

<input class="hidden" type="file" accept="image/*" on:change={handleBackgroundUpload} multiple bind:this={addBackgroundImages} />
<input class="hidden" type="file" accept="image/*" on:change={handleFileUpload} bind:this={addFloatingImage} />

<div class="grid gap-4">
    <form on:submit|preventDefault={() => addBackgroundImages.click()}>
        <CustomButtonComponent
                buttonText="Add background images"
                backgroundColor={BUTTON_COLORS.rantagesYellow}
                buttonType="submit"
        />
    </form>

    <form on:submit|preventDefault={() => addFloatingImage.click()}>
        <CustomButtonComponent
                buttonText="Add floating image"
                backgroundColor={BUTTON_COLORS.rantagesYellow}
                buttonType="submit"
        />
    </form>

    <form on:submit|preventDefault={openModal}>
        <CustomButtonComponent
                buttonText="Add Text"
                backgroundColor={BUTTON_COLORS.rantagesYellow}
                buttonType="submit"
        />
    </form>

    <form on:submit|preventDefault={download}>
        <CustomButtonComponent
                buttonText="Download"
                backgroundColor={BUTTON_COLORS.rantagesYellow}
                buttonType="submit"
        />
    </form>
</div>

<Modal bind:showModal>
    <h2 slot="header" class="text-2xl font-bold mb-4">
        Add Text
    </h2>

    <div class="mb-4">
        <CustomInputComponent
                placeholderText="Your text here"
                bind:value={text}
        />
    </div>

    <div class="mb-4">
        <CustomInputComponent
                placeholderText="Text size"
                bind:value={textSize}
        />
    </div>
</Modal>
