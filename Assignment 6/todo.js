const task = [];

function addNew() {
    let label = document.getElementById("title").value;
    let descr = document.getElementById("discr").value;

    let list = document.getElementById("list");

    let newItem = document.createElement("li");

    newItem.innerHTML = `
    <li>
        <div class="task-header">
            <h3>${label}</h3>
            <div class="task-buttons">
                <button type="button" onclick="removeTask(this)">
                    <img src="remove.png">
                </button>
                <button type="button" onclick="acceptTask(this)">
                    <img src="accept.png">
                </button>
            </div>
        </div>
        <div class="task-desc">
            <p>${descr}</p>
        </div>
    </li>
    `;

    list.appendChild(newItem);

    document.getElementById("title").value = "";
    document.getElementById("discr").value = "";
}

function removeTask(button) {
    let li = button.closest("li");
    li.remove();
}

function acceptTask(button) {
    let li = button.closest("li");
    li.querySelector("h3").style.textDecoration = "line-through";
    li.querySelector("p").style.textDecoration = "line-through";
}
