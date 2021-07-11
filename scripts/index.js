/**
 * Predefined constants for different Card layouts
 */
const CARD = {
    HORIZONTAL: 0,
    VERTICAL: 1,
    SMALL: 2,
};

/**
 * @param {number} type - card layout as defined in the CARD constant (horizontal, vertical, or small)
 * @param {string} imgPath - path to image file to be displayed on the card
 * @param {string} title - title of the card
 * @param {string} subtitle - subtitle to be displayed on the card
 * @param {string} description
 * @param {string} url - URL pointing to external resources
 * @param {string} urlText - text to display instead of the URL
 * @returns {Node} A preformatted `<div>` element that can be attached to the DOM
 */
function bindToCard(
    type,
    imgPath,
    title,
    subtitle,
    description,
    url,
    urlText = "More details"
) {
    type = type || CARD.HORIZONTAL; // Default card layout is horizontal

    var cardType;

    switch (type) {
        case CARD.HORIZONTAL:
            cardType = "card-h";
            break;
        case CARD.VERTICAL:
            cardType = "card-v";
            break;
        case CARD.SMALL:
            cardType = "card-sm";
            break;
    }

    var clone = document
        .querySelector(`#templates .card.${cardType}.template`)
        .cloneNode(true);

    if (imgPath) {
        var img = document.createElement("img");
        img.src = imgPath;
        clone.querySelector(`.${cardType}-img`).appendChild(img);
    }

    if (title) {
        clone.querySelector(
            `.${cardType}-content .${cardType}-title`
        ).textContent = title;
    }

    if (subtitle) {
        clone.querySelector(
            `.${cardType}-content .${cardType}-subtitle`
        ).textContent = subtitle;
    }

    if (description) {
        clone.querySelector(
            `.${cardType}-content .${cardType}-description`
        ).textContent = description;
    } else {
        clone
            .querySelector(`.${cardType}-content .${cardType}-description`)
            ?.remove();
    }

    if (url) {
        var link = document.createElement("a");

        link.href = url;
        link.textContent = urlText;

        clone.querySelector(`.${cardType}-content`).appendChild(link);
    }

    clone.classList.remove("template");

    return clone;
}

function bindToModal(element, modal) {}

function bindData() {
    const _education = document.querySelector("#education .section-content");
    const _skills = document.querySelector("#skills .section-content");
    const _technologies = document.querySelector(
        "#technologies .section-content"
    );
    const _projectsDone = document.querySelector(
        "#projects-done .section-content"
    );

    // Clone the template `div` and populate it with necessary data
    education.forEach(function (e) {
        var card = bindToCard(
            CARD.HORIZONTAL,
            e.img_path || placeholder_img.education,
            e.name,
            `${e.degree} \u2022 ${e.year_start} - ${e.year_end || "Present"}`
        );

        _education.append(card);
    });

    skills.forEach(function (e) {
        var card = bindToCard(CARD.SMALL, e.img_path, e.name);
        _skills.append(card);
    });

    technologies.forEach(function (e) {
        var card = bindToCard(
            CARD.HORIZONTAL,
            e.img_path || placeholder_img.technologies,
            e.name,
            e.level
        );
        _technologies.append(card);
    });

    projectsDone.forEach(function (e) {
        var card = bindToCard(
            CARD.VERTICAL,
            e.img_path,
            e.name,
            `${e.date_started} - ${e.date_completed || "Present"}`,
            e.description,
            e.url,
            "Project link \u02C3"
        );
        _projectsDone.append(card);
    });

    document.querySelector("#templates").remove();
}

bindData();
