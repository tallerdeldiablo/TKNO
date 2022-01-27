module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },

  get_emoji: (th) => {
    const randomNum = th.length;

    return `<span for="img" aria-label="lightbulb">💡  ${randomNum}</span
    ><i class="bi bi-pen-fill"></i>
    `;
  },

};
