fdescribe('Pagination', function () {
  var pages, previous, next;
  beforeEach(function () {
    browser.get('http://localhost:9000/#/pagination');
    pages = element.all(by.repeater('page in pages'));
    previous = element(by.id('previous'));
    next = element(by.id('next'));
  });

  it('should have title Pagination', function () {
    expect(element(by.css('h2')).getText()).toEqual('Pagination');
  });

  it('should have five pages', function () {
    expect(pages.count()).toEqual(5);
  });

  it('should switch to a page', function () {
    pageTo(1);
    expect(pages.get(0).getAttribute('class')).not.toContain('active');
    expect(pages.get(1).getAttribute('class')).toContain('active');
    expect(pages.get(2).getAttribute('class')).not.toContain('active');

    pageTo(3);
    expect(pages.get(2).getAttribute('class')).not.toContain('active');
    expect(pages.get(3).getAttribute('class')).toContain('active');
    expect(pages.get(4).getAttribute('class')).not.toContain('active');
  });

  it('should disable previous or next when page number is first or last', function () {
    pageTo(0);
    expect(previous.getAttribute('class')).toEqual('disabled');
    expect(next.getAttribute('class')).toEqual('');

    pages.count().then(function (total) {
      pageTo(total - 1);
    });

    expect(previous.getAttribute('class')).toEqual('');
    expect(next.getAttribute('class')).toEqual('disabled');
  });

  function pageTo(pgNum) {
    pages.get(pgNum).element(by.tagName('a')).click();
  };

});
