export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "white",
    padding: 20,
    backgroundColor: "black",
    "&:hover": {
      borderColor: "red",
      color: "white",
      backgroundColor: "#F59E0B",
    },
  }),
  control: () => ({
    width: 200,
    display: "flex",
    backgroundColor: "black",
    color: "white",
    borderRadius: "10px",
  }),
  placeholder: (base) => ({
    ...base,
    color: "white",
  }),

  indicatorSeparator: () => ({ display: "none" }),

  // placeholder: () => ({ display: "none" }),

  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.8 : 0.8;
    const transition = "opacity 300ms";
    const color = { color: "red" };

    return { ...provided, opacity, transition, color };
  },
};
