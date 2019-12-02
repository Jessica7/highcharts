QUnit.test("defaultOptions", assert => {
    const {
        noData: {
            attr: {
                zIndex
            }
        }
    } = Highcharts.getOptions();

    assert.equal(
        zIndex,
        1,
        "should have defaultOptions.noData.attr.zIndex to equal 1 (#12343)"
    );
});