param location string
param name string

resource appServicePlan 'Microsoft.Web/serverfarms@2018-02-01' = {
  name: name
  location: location
  kind: 'linux'
  sku: {
    name: 'S1'
    tier: 'Standard'
    size: 'S1'
    family: 'S'
    capacity: 1
  }
  properties: {
    reserved: true
  }
}
output appServicePlanID string = appServicePlan.id
