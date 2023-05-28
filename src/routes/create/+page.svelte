<h4>Add text to canvas and drag it</h4>
<form on:submit|preventDefault={submit}>
    <input bind:this={memeText} id="theText" type="text">
    <input type="file" id="imageInput" accept = "image/*" bind:this={image}>
    <button id="submit">Draw text on canvas</button>
    <br>
</form>
<canvas
        bind:this={canvas}
        width={width}
        height={height}
>
</canvas>

<style>
    canvas {
        border: 1px solid black;
    }
</style>

<script lang="ts">
    import {onMount} from 'svelte';

    let memeText;
    let image;
    let imageFile;
    let canvas;
    let ctx;
    const width = 300;
    const height = 300;
    let startX;
    let startY;
    const texts = [];
    let selectedText = -1;
    let offsetX = 0;
    let offsetY = 0;
    let scrollX = 0;
    let scrollY = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < texts.length; i++) {
            const text = texts[i];
            if (imageFile) {
                loadImage(imageFile);
            }
            ctx.fillText(text.text, text.x, text.y);
        }
    }

    function textDrag(x, y, textIndex) {
        const text = texts[textIndex];
        return (x >= text.x && x <= text.x + text.width && y >= text.y - text.height && y <= text.y);
    }

    function handleMouseDown(e) {
        e.preventDefault();
        startX = e.clientX - offsetX;
        startY = e.clientY - offsetY;
        for (let i = 0; i < texts.length; i++) {
            if (textDrag(startX, startY, i)) {
                selectedText = i;
            }
        }
    }

    function handleMouseUp(e) {
        e.preventDefault();
        selectedText = -1;
    }

    function handleMouseOut(e) {
        e.preventDefault();
        selectedText = -1;
    }

    function handleMouseMove(e) {
        if (selectedText < 0) {
            return;
        }
        e.preventDefault();
        let mouseX;
        mouseX = e.clientX - offsetX;
        let mouseY;
        mouseY = e.clientY - offsetY;

        const dx = mouseX - startX;
        const dy = mouseY - startY;
        startX = mouseX;
        startY = mouseY;

        const text = texts[selectedText];
        text.x += dx;
        text.y += dy;
        draw();
    }

    function submit() {
        const y = texts.length * 20 + 20;

        const text = {
            text: memeText.value,
            x: 20,
            y: y,
            width: 0,
            height: 0,
        };

        ctx.font = "16px verdana";
        text.width = ctx.measureText(text.text).width;
        text.height = 16;

        texts.push(text);

        draw();
    }

    function loadImage(imageFile) {
        const reader = new FileReader();
        reader.readAsDataURL(imageFile);
        reader.onloadend = function (e) {
            const myImage = new Image(); // Creates image object
            if (typeof e.target.result === "string") {
                myImage.src = e.target.result;
            } // Assigns converted image to image object
            myImage.onload = () => {
                ctx.drawImage(myImage,0,0); // Draws the image on canvas
                canvas.toDataURL("image/jpeg",0.75); // Assigns image base64 string in jpeg format to a variable
            }
        }
    }

    onMount(() => {
        ctx = canvas.getContext("2d");
        offsetX = ctx.canvas.offsetLeft;
        offsetY = ctx.canvas.offsetTop;
        scrollX = ctx.canvas.scrollLeft;
        scrollY = ctx.canvas.scrollTop;

        canvas.addEventListener('mousedown', (e) => {
            handleMouseDown(e);
        });

        canvas.addEventListener('mousemove', (e) => {
            handleMouseMove(e);
        });

        canvas.addEventListener('mouseup', (e) => {
            handleMouseUp(e);
        });

        canvas.addEventListener('mouseout', (e) => {
            handleMouseOut(e);
        });

        image.addEventListener('change', (e) => {
            if(e.target.files) {
                imageFile = e.target.files[0];
                loadImage(imageFile);
            }
        });
    });
</script>
