import "./styles.css";

const API_URL = "https://notes-api.dicoding.dev/v2";

async function fetchNonArchivedNotes() {
  try {
    const response = await fetch(`${API_URL}/notes`);
    const data = await response.json();
    if (response.ok) {
      return data.data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Error fetching non-archived notes:", error);
    return [];
  }
}

async function fetchArchivedNotes() {
  try {
    const response = await fetch(`${API_URL}/notes/archived`);
    const data = await response.json();
    if (response.ok) {
      return data.data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Error fetching archived notes:", error);
    return [];
  }
}

async function addNoteAPI(title, body) {
  try {
    const response = await fetch(`${API_URL}/notes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      alert("Note has been successfully added.");
      return data.data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error("Error adding note:", error);
    alert("Error adding note. Please try again later.");
    return null;
  }
}

async function fetchSingleNote(noteId) {
  try {
    const response = await fetch(`${API_URL}/notes/${noteId}`);
    const data = await response.json();
    if (response.ok) {
      return data.data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error(`Error fetching note with ID ${noteId}:`, error);
    return null;
  }
}

async function deleteNoteAPI(noteId) {
  try {
    const confirmed = window.confirm(
      "Are you sure you want to delete this note?",
    );
    if (!confirmed) return false;

    const response = await fetch(`${API_URL}/notes/${noteId}`, {
      method: "DELETE",
    });
    const data = await response.json();
    if (response.ok) {
      alert("Note has been successfully deleted.");
      return true;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    alert("Error deleting note. Please try again later.");
    return false;
  }
}

async function archive(noteId) {
  try {
    const response = await fetch(`${API_URL}/notes/${noteId}/archive`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      alert("Note has been successfully archived.");
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    alert("Error archiving note. Please try again later.");
  }
}

async function archiveNote() {
  const noteId = this.closest(".note-card").dataset.id;
  await archive(noteId);
  const noteCard = this.closest(".note-card");
  noteCard.remove();
  await displayNonArchivedNotes();
}

async function unarchive(noteId) {
  try {
    const response = await fetch(`${API_URL}/notes/${noteId}/unarchive`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (response.ok) {
      alert("Note has been successfully unarchived.");
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    alert("Error unarchiving note. Please try again later.");
  }
}

async function handleUnarchiveNote() {
  const noteId = this.closest(".note-card").dataset.id;
  await unarchive(noteId);
  const noteCard = this.closest(".note-card");
  noteCard.remove();
  await displayArchivedNotes();
}

function animateNoteHide(noteCard) {
  anime({
    targets: noteCard,
    opacity: [1, 0],
    translateY: [0, 20],
    easing: "easeOutQuad",
    duration: 500,
    complete: () => noteCard.remove(),
  });
}

async function handleDeleteNote() {
  const noteCard = this.closest(".note-card");
  const noteId = noteCard.dataset.id;
  const isDeleted = await deleteNoteAPI(noteId);
  if (isDeleted) {
    animateNoteHide(noteCard);
    displayNonArchivedNotes();
  }
}

function animateButtonHover(buttonId) {
  anime({
    targets: buttonId,
    scale: 1.1,
    duration: 300,
    easing: "easeInOutSine",
  });
}

function animateButtonLeave(buttonId) {
  anime({
    targets: buttonId,
    scale: 1,
    duration: 300,
    easing: "easeInOutSine",
  });
}

async function displayNonArchivedNotes() {
  const loadingIndicator = document.querySelector(".loading-indicator");
  loadingIndicator.style.display = "block";

  anime({
    targets: ".notes-container .note-card",
    opacity: [1, 0],
    translateY: [0, -20],
    duration: 500,
    easing: "easeOutQuad",
    complete: () => {
      notesContainer.innerHTML = "";
      fetchNonArchivedNotes()
        .then((nonArchivedNotes) => {
          nonArchivedNotes.forEach((note) => {
            addNoteToContainer(note);
          });
        })
        .catch((error) =>
          console.error("Error fetching non-archived notes:", error),
        )
        .finally(() => {
          loadingIndicator.style.display = "none";
          document.getElementById("showNonArchived").style.backgroundColor =
            "#2e4a32";
          document.getElementById("showArchived").style.backgroundColor =
            "#739072";
          document
            .getElementById("showNonArchived")
            .addEventListener("mouseenter", () => {
              animateButtonHover("#showNonArchived");
            });

          document
            .getElementById("showNonArchived")
            .addEventListener("mouseleave", () => {
              animateButtonLeave("#showNonArchived");
            });
        });
    },
  });
}

async function displayArchivedNotes() {
  const loadingIndicator = document.querySelector(".loading-indicator");
  loadingIndicator.style.display = "block";

  anime({
    targets: ".notes-container .note-card",
    opacity: [1, 0],
    translateY: [0, -20],
    duration: 500,
    easing: "easeOutQuad",
    complete: () => {
      notesContainer.innerHTML = "";
      fetchArchivedNotes()
        .then((archivedNotes) => {
          archivedNotes.forEach((note) => {
            addArchivedNoteToContainer(note);
          });
        })
        .catch((error) =>
          console.error("Error fetching archived notes:", error),
        )
        .finally(() => {
          loadingIndicator.style.display = "none";
          document.getElementById("showNonArchived").style.backgroundColor =
            "#739072";
          document.getElementById("showArchived").style.backgroundColor =
            "#2e4a32";
          document
            .getElementById("showArchived")
            .addEventListener("mouseenter", () => {
              animateButtonHover("#showArchived");
            });

          document
            .getElementById("showArchived")
            .addEventListener("mouseleave", () => {
              animateButtonLeave("#showArchived");
            });
        });
    },
  });
}

document
  .getElementById("showNonArchived")
  .addEventListener("mouseenter", () => {
    animateButtonHover("#showNonArchived");
    displayNonArchivedNotes();
  });
document.getElementById("showArchived").addEventListener("mouseenter", () => {
  animateButtonHover("#showArchived");
  displayArchivedNotes();
});

class AppBar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>Notes App</h1>
      </header>
    `;
  }
}
customElements.get("app-bar") || customElements.define("app-bar", AppBar);

class NoteCard extends HTMLElement {
  static get observedAttributes() {
    return ["archived"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "archived") {
      this.render();
    }
  }

  render() {
    const { id, title, body, createdAt, archived } = this.dataset;
    const createdDate = new Date(createdAt);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      createdDate,
    );

    this.innerHTML = `
      <div class="note-card" data-id="${id}">
        <div class="note-title">${title}</div>
        <div class="note-body">${body}</div>
        <div class="created-at">${formattedDate}</div>
        <div class="note-actions">
          <button class="delete-btn"><i class="ri-delete-bin-line"></i>Delete</button>
        </div>
      </div>
    `;

    const archiveBtn = this.querySelector(".archive-btn");
    if (archiveBtn) {
      archiveBtn.addEventListener("click", archiveNote);
    }

    const unarchiveBtn = this.querySelector(".unarchive-btn");
    if (unarchiveBtn) {
      unarchiveBtn.addEventListener("click", handleUnarchiveNote);
    }

    const deleteBtn = this.querySelector(".delete-btn");
    if (deleteBtn) {
      deleteBtn.addEventListener("click", handleDeleteNote);
    }
  }
}

customElements.get("note-card") || customElements.define("note-card", NoteCard);

let notesContainer;

async function loadNotes() {
  const loadingIndicator = document.querySelector(".loading-indicator");
  loadingIndicator.style.display = "block";
  const nonArchivedNotes = await fetchNonArchivedNotes();
  nonArchivedNotes.forEach((note) => addNoteToContainer(note));
  loadingIndicator.style.display = "none";
}

loadNotes();

function addNoteToContainer(note) {
  const noteCard = document.createElement("note-card");
  noteCard.dataset.id = note.id;
  noteCard.dataset.title = note.title;
  noteCard.dataset.body = note.body;
  noteCard.dataset.createdAt = note.createdAt;
  notesContainer.appendChild(noteCard);

  if (note.archived) {
    noteCard.setAttribute("archived", "true");
  } else {
    noteCard.removeAttribute("archived");
  }

  const actionBtn = note.archived ? "unarchive-btn" : "archive-btn";
  const actionIcon = note.archived
    ? '<i class="ri-inbox-unarchive-line"></i></i>Unarchive'
    : '<i class="ri-inbox-archive-line"></i></i>Archive';

  const actionButton = document.createElement("button");
  actionButton.classList.add(actionBtn);
  actionButton.innerHTML = actionIcon;
  actionButton.addEventListener(
    "click",
    note.archived ? handleUnarchiveNote : archiveNote,
  );

  noteCard.querySelector(".note-actions").appendChild(actionButton);
}

function addArchivedNoteToContainer(note) {
  const noteCard = document.createElement("note-card");
  noteCard.dataset.id = note.id;
  noteCard.dataset.title = note.title;
  noteCard.dataset.body = note.body;
  noteCard.dataset.createdAt = note.createdAt;
  notesContainer.appendChild(noteCard);

  if (note.archived !== "true") {
    const unarchiveBtn = document.createElement("button");
    unarchiveBtn.classList.add("unarchive-btn");
    unarchiveBtn.innerHTML =
      '<i class="ri-inbox-unarchive-line"></i></i>Unarchive';
    unarchiveBtn.addEventListener("click", handleUnarchiveNote);
    noteCard.querySelector(".note-actions").appendChild(unarchiveBtn);
  }
}

class NoteForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="note-form">
        <h2>Add Note</h2>
        <form id="addNoteForm">
          <input type="text" id="noteTitle" placeholder="Enter title" required><br>
          <textarea id="noteBody" placeholder="Write your notes..." required></textarea><br>
          <button type="submit" disabled><i class="ri-add-line"></i>Add Note</button>
        </form>
      </div>
    `;
    this.querySelector("#addNoteForm").addEventListener(
      "submit",
      this.handleFormSubmit.bind(this),
    );
  }

  async handleFormSubmit(event) {
    event.preventDefault();
    const loadingIndicator = document.querySelector(".loading-indicator");
    loadingIndicator.style.display = "block";
    const title = this.querySelector("#noteTitle").value;
    const body = this.querySelector("#noteBody").value;
    const newNote = await addNoteAPI(title, body);
    if (newNote) {
      addNoteToContainer(newNote);
      event.target.reset();
      displayNonArchivedNotes();
    }
    loadingIndicator.style.display = "none";
  }
}

customElements.get("note-form") || customElements.define("note-form", NoteForm);

document.addEventListener("DOMContentLoaded", function () {
  notesContainer = document.querySelector(".notes-container");
  const titleInput = document.getElementById("noteTitle");
  const bodyInput = document.getElementById("noteBody");
  const addButton = document.querySelector('button[type="submit"]');

  function validateForm() {
    if (titleInput.value.trim() !== "" && bodyInput.value.trim() !== "") {
      addButton.disabled = false;
    } else {
      addButton.disabled = true;
    }
  }

  titleInput.addEventListener("input", validateForm);
  bodyInput.addEventListener("input", validateForm);
});

class LoadingIndicator extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="loading-indicator">
        <div class="spinner"></div>
      </div>
    `;
  }
}

customElements.get("loading-indicator") ||
  customElements.define("loading-indicator", LoadingIndicator);
