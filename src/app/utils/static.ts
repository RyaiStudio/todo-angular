const randomStr = () =>
  Math.random()
    .toString(36)
    .slice(2);

const $songs = [];

const $tabs = [
  {
    id: randomStr(),
    isActive: true,
    label: "Add Playlist",
    icon: "fas fa-puzzle-piece",
    target: "#inputform"
  },
  {
    id: randomStr(),
    isActive: false,
    label: "Playlist",
    icon: "fas fa-play",
    target: "#playlist"
  }
];

const $formInputs = [
  {
    label: "Artist",
    inputId: "artist",
    value: "",
    error: "This field is required"
  },
  {
    label: "Album",
    inputId: "album",
    value: "",
    error: "This field is required"
  },
  {
    label: "Release",
    inputId: "release",
    value: "",
    error: "Your release date is not right"
  },
  {
    label: "Genres",
    inputId: "genres",
    value: "",
    error: "This field is required"
  },
  {
    label: "Thumbnail URL",
    inputId: "thumbnailUrl",
    value: "",
    error: "Your thumbnail url is not right"
  }
];

export { $songs, $tabs, $formInputs, randomStr };
