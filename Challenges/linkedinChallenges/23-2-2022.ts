const testThis = {
  property: 'foo',
  logProps: function () {
    const logProps = 'bar'
    console.log(this.logProps) // [λ: logProps]
  }
}

testThis.logProps()
