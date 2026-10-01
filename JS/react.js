// methods that doesnt mutame the original array

// instead of pop,push,shift,unshift,splice,use these ✅
// [...arr, x]              // instead of push
// arr.slice(0, -1)         // instead of pop
// arr.slice(1)             // instead of shift
// [x, ...arr]              // instead of unshift
// arr.filter(...)          // instead of splice (remove)
// [...arr].sort()          // copy first, then sort
// [...arr].reverse()       // copy first, then reverse

// ✅ Functional updater
// setState(c => c + 1);
// setState(c => c + 1);
// setState(c => c + 1);

// .reduce() method
export default function CartSummary({ items }) {
  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,0 );
// Group items by category: start with {}, builds object
  const byCategory = items.reduce((groups, item) => {
    const key = item.category;
    return {
      ...groups,
      [key]: [...(groups[key] || []), item],
    };
  }, {});

  const counts = items.reduce((acc, item) => ({
    ...acc,
    [item.category]: (acc[item.category] || 0) + 1,
  }), {});

  return null;
}