import { Injectable } from '@nestjs/common';
import { Container, CosmosClient } from '@azure/cosmos';
import { ConfigService } from '@nestjs/config';

const defaultDatabase = 'inno-store';

@Injectable()
export class CosmosService {
  private client: CosmosClient;

  constructor(private configService: ConfigService) {}

  container(containerId: string): Promise<Container> {
    return this.getContainer(defaultDatabase, containerId);
  }

  private async getContainer(
    databaseId: string,
    containerId: string,
  ): Promise<Container> {
    if (!this.client) {
      this.client = new CosmosClient({
        endpoint: this.configService.get('CUSTOMCONNSTR_COSMOSDB_ENDPOINT'),
        key: this.configService.get('CUSTOMCONNSTR_COSMOSDB_KEY'),
      });
    }
    await this.client.databases.createIfNotExists({
      id: databaseId,
    });
    const database = this.client.database(databaseId);
    await database.containers.createIfNotExists({
      id: containerId,
    });
    return database.container(containerId);
  }
}
