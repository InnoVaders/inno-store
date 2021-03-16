# Deploy IaC

    az deployment group create -f ./main.bicep -g U118053-sb-rg-iac

## Configure Deployment Credentials

see https://about-azure.com/deploying-to-azure-using-github-actions/

    az login

    az ad sp create-for-rbac --name http://U118053-sb-rg-iac-deploy -deploy --role 'contributor' --scopes '/subscriptions/2f6df874-de8e-4c0e-890e-11dda7d2c01a/resourceGroups/U118053-sb-rg-iac/' --sdk-auth
    

    az ad sp create-for-rbac --name 'http://inno-store-deploy' --role contributor --scopes /subscriptions/b0ad0269-d886-4b75-a66c-f97d71020ac9/resourceGroups/inno-store --sdk-auth
