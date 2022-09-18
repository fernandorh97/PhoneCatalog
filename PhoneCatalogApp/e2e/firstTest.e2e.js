describe('Phone catalog flow', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should load phones', async () => {
    await waitFor(element(by.id('phone-0')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('phone-0'))).toBeVisible();
  });

  it('should open phone details', async () => {
    await expect(element(by.id('phone-0'))).toBeVisible();
    await element(by.id('phone-0')).tap();
    await expect(element(by.id('phone-details-screen'))).toBeVisible();
  });
});
