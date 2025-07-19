export const formatDate = (dateString) => {
  if (!dateString) return 'No due date';
  return new Date(dateString).toLocaleDateString();
};

export const formatDateForInput = (dateString) => {
  if (!dateString) return '';
  return new Date(dateString).toISOString().split('T')[0];
};

export const isPastDate = (dateString) => {
  return dateString && new Date(dateString) < new Date();
};

export const getTodayForInput = () => {
  return new Date().toISOString().split('T')[0];
};