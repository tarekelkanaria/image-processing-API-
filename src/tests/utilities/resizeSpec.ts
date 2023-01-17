import path from 'path';
import resizeImage from '../../utilities/resize';
// Test resizeImage module
describe('Test resize functionality', () => {
  it('Should resize the image', () => {
    return expectAsync(
      resizeImage(
        './assets/images/fjord.jpg',
        200,
        200,
        path.join(__dirname, `../../../thumb/fjord.jpg`)
      )
    ).toBeResolved();
  });
});
