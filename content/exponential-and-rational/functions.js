// =============================================================================
// Exponentials and Logarithms
// (c) Mathigon
// =============================================================================


export function cd4(section) {

  section.onScore('blank-1', () => section.$el.$('.c1').addClass('on'));
  section.onScore('blank-2', () => section.$el.$('.c2').addClass('on'));
  section.onScore('blank-3', () => section.$el.$('.c3').addClass('on'));
  section.onScore('blank-4', () => section.$el.$('.c4').addClass('on'));

}
