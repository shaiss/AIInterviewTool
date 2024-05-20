import { Module } from "@nestjs/common";
import { QuestionGenerationAgentModule } from "./questionGenerationAgent/questionGenerationAgent.module";
import { TranscriptionAgentModule } from "./transcriptionAgent/transcriptionAgent.module";
import { ContextAnalysisAgentModule } from "./contextAnalysisAgent/contextAnalysisAgent.module";
import { GuidanceAgentModule } from "./guidanceAgent/guidanceAgent.module";
import { SupervisoryAgentModule } from "./supervisoryAgent/supervisoryAgent.module";
import { ContextAnalysisModule } from "./ContextAnalysis/contextanalysis.module";
import { GuidanceModule } from "./Guidance/guidance.module";
import { QuestionGenerationModule } from "./QuestionGeneration/questiongeneration.module";
import { SupervisoryModule } from "./Supervisory/supervisory.module";
import { TranscriptionModule } from "./Transcription/transcription.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    QuestionGenerationAgentModule,
    TranscriptionAgentModule,
    ContextAnalysisAgentModule,
    GuidanceAgentModule,
    SupervisoryAgentModule,
    ContextAnalysisModule,
    GuidanceModule,
    QuestionGenerationModule,
    SupervisoryModule,
    TranscriptionModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
