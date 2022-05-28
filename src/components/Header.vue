<script>
export default {
    name: "Header",
};
</script>

<template>
    <header id="header">
        <div class="header-img">
            <img src="/profile.png" alt="profile_pic" />
        </div>
        <div class="header-content">
            <h1>Janley Molina</h1>
            <p>Software Developer</p>
            <RouterLink to="/details">View details</RouterLink>
            <RouterLink to="/about">About</RouterLink>
        </div>
    </header>
</template>

<style scoped>
#header {
    background-image: linear-gradient(
            rgba(170, 130, 0, 0.05),
            rgba(0, 0, 0, 0.95)
        ),
        url("/bg.png");
    background-size: cover;
    height: 100%;
    text-align: center;
    padding: 10%;
}

.header-img {
    text-align: center;
}

.header-img > img {
    max-width: 250px;
    border-radius: 50%;
}

.header-content {
    color: #eeeeee;
    font-family: "Montserrat", sans-serif;
}

.header-content > h1 {
    font-size: 2em;
    font-weight: 600;
}

.header-content > p {
    font: 400 1.2em "Source Sans Pro", sans-serif;
}

.header-content a {
    margin: 5px;
    padding: 10px;
    border-radius: 6px;
    border: 2px solid #ff5f5f;

    font-size: 1em;
    font-weight: 500;
    color: #ff5f5f;

    text-decoration-line: none;
}

.header-content a:hover {
    transition: all 0.4s ease;
    color: #eeeeee;
    background-color: #ff5f5f;
}
</style>
