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
    await waitFor(element(by.id('phone-details-screen')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('phone-details-screen'))).toBeVisible();
  });

  it('should add new phone', async () => {
    await expect(element(by.id('add-button'))).toBeVisible();
    await element(by.id('add-button')).tap();
    await waitFor(element(by.id('phone-details-screen'))).toBeVisible();

    await element(by.id('editable-name')).tap();
    await element(by.id('text-input')).typeText('TestPhone\n');
    await element(by.id('editable-manufacturer')).tap();
    await element(by.id('text-input')).typeText('Company\n');
    await element(by.id('editable-img-next')).tap();
    await element(by.id('editable-img-next')).tap();
    await element(by.id('editable-img-next')).tap();
    await element(by.id('editable-price')).tap();
    await element(by.id('text-input')).typeText('347\n');
    await element(by.id('editable-description')).tap();
    await element(by.id('text-input')).typeText('This is a test description\n');

    await waitFor(element(by.id('confirm-add-button')))
      .toBeVisible()
      .whileElement(by.id('phone-details-scroll'))
      .scroll(100, 'down', 0.5, 0.5);

    await element(by.id('editable-color')).tap();
    await element(by.id('text-input')).typeText('Black\n');
    await element(by.id('editable-processor')).tap();
    await element(by.id('text-input')).typeText('A-Test\n');
    await element(by.id('editable-screen')).tap();
    await element(by.id('text-input')).typeText('Big\n');
    await element(by.id('editable-ram')).tap();
    await element(by.id('text-input')).typeText('8\n');
    await element(by.id('confirm-add-button')).tap();

    await waitFor(element(by.id('status-text')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('status-text'))).toBeVisible();
  });

  it('should edit added phone', async () => {
    await waitFor(element(by.id('phone-list')))
      .toBeVisible()
      .withTimeout(5000);
    await waitFor(element(by.text('TestPhone')))
      .toBeVisible()
      .whileElement(by.id('phone-list'))
      .scroll(100, 'down', 0.5, 0.5);
    await element(by.text('TestPhone')).tap();

    await waitFor(element(by.id('phone-details-screen'))).toBeVisible();
    await waitFor(element(by.id('edit-button')))
      .toBeVisible()
      .whileElement(by.id('phone-details-scroll'))
      .scroll(100, 'down', 0.5, 0.5);
    await element(by.id('edit-button')).tap();

    await waitFor(element(by.id('editable-img-next'))).toBeVisible();

    await element(by.id('editable-img-next')).tap();
    await element(by.id('editable-price')).tap();
    await element(by.id('text-input')).typeText('5\n');
    await element(by.id('editable-description')).tap();
    await element(by.id('text-input')).typeText('test\n');

    await waitFor(element(by.id('update-button')))
      .toBeVisible()
      .whileElement(by.id('phone-details-scroll'))
      .scroll(100, 'down', 0.5, 0.5);

    await element(by.id('update-button')).tap();

    await waitFor(element(by.id('status-text')))
      .toBeVisible()
      .withTimeout(5000);
    await expect(element(by.id('status-text'))).toBeVisible();
  });

  it('should delete phone', async () => {
    await waitFor(element(by.id('phone-list')))
      .toBeVisible()
      .withTimeout(5000);
    await waitFor(element(by.text('TestPhone')))
      .toBeVisible()
      .whileElement(by.id('phone-list'))
      .scroll(100, 'down', 0.5, 0.5);
    await element(by.text('TestPhone')).tap();
    await waitFor(element(by.id('phone-details-screen'))).toBeVisible();
    await waitFor(element(by.id('delete-button')))
      .toBeVisible()
      .whileElement(by.id('phone-details-scroll'))
      .scroll(100, 'down', 0.5, 0.5);

    await element(by.id('delete-button')).tap();
    await waitFor(element(by.id('home-screen')))
      .toBeVisible()
      .withTimeout(5000);
  });
});
