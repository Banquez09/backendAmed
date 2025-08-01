import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Query } from '@nestjs/common';
import { AmbulanciaService } from './ambulancia.service';
import { CreateAmbulanciaDto } from './dto/create-ambulancia.dto';
import { UpdateAmbulanciaDto } from './dto/update-ambulancia.dto';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { Ambulancia } from './entities/ambulancia.entity';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('ambulancia')
@Controller('ambulancia')
export class AmbulanciaController {
  constructor(private readonly ambulanciaService: AmbulanciaService) {}

  /*@Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Create a new ambulance' })
  @ApiResponse({ status: 201, description: 'The ambulance has been successfully created.', type: Ambulancia })
  @ApiBody({ type: CreateAmbulanciaDto })
  create(@Body() createAmbulanciaDto: CreateAmbulanciaDto) {
    return this.ambulanciaService.create(createAmbulanciaDto);
  }


  @Get()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get all ambulances' })
  @ApiResponse({ status: 200, description: 'Return all ambulances.', type: [Ambulancia] })
  findAll() {
    return this.ambulanciaService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Get a ambulance by id' })
  @ApiResponse({ status: 200, description: 'Return the ambulance.', type: Ambulancia })
  findOne(@Param('id') id: string) {
    return this.ambulanciaService.findOne(+id);
  }*/

  @Post()
  //@ApiBearerAuth()
 // @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Create a new ambulancia' })
    @ApiResponse({ status: 201, description: 'The ambulancia has been created' })
    create(@Body() createAmbulanciaDto: CreateAmbulanciaDto) {
        return this.ambulanciaService.create(createAmbulanciaDto);
    }

    @Get()
   // @ApiBearerAuth()
    //@UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Get all ambulancias' })
    findAll() {
        return this.ambulanciaService.findAll();
    }

    @Get('nearest')
   // @ApiBearerAuth()
  //  @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Find nearest available ambulancia' })
    findNearest(
        @Query('latitude') latitude: number,
        @Query('longitude') longitude: number,
    ) {
        return this.ambulanciaService.findAmbulanceCerca(latitude, longitude);
    }

    @Get(':id')
    //@ApiBearerAuth()
    //@UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Get ambulancia by id' })
    findOne(@Param('id') id: string) {
        return this.ambulanciaService.findOne(+id);
    }

    @Patch(':id')
   // @ApiBearerAuth()
   // @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Update ambulancia' })
    update(@Param('id') id: string, @Body() updateAmbulanciaDto: UpdateAmbulanciaDto) {
        return this.ambulanciaService.update(+id, updateAmbulanciaDto);
    }

    @Delete(':id')
   // @ApiBearerAuth()
   // @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Delete ambulancia' })
    remove(@Param('id') id: string) {
        return this.ambulanciaService.remove(+id);
    }


    @Patch('/update/location/:id')
   // @ApiBearerAuth()
   // @UseGuards(AuthGuard('jwt'))
    @ApiOperation({ summary: 'Update ambulancia' })
    updateLocation(@Param('id') id: number, @Body() updateAmbulanciaDto: UpdateAmbulanciaDto) {
      console.log('QUE RECIBO',updateAmbulanciaDto)
     const updatedAmbulance =  this.ambulanciaService.updateLocation(id,updateAmbulanciaDto.latitude, updateAmbulanciaDto.longitude, updateAmbulanciaDto.ubicacionActual);
      console.log(`Ubicación actualizada para ambulancia ${id}:`, updatedAmbulance);
        return  updatedAmbulance;
    }
  /*@Patch(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Update a ambulance' })
  @ApiResponse({ status: 200, description: 'The ambulance has been successfully updated.', type: Ambulancia })
  @ApiBody({ type: UpdateAmbulanciaDto })
  update(@Param('id') id: string, @Body() updateAmbulanciaDto: UpdateAmbulanciaDto) {
    return this.ambulanciaService.update(+id, updateAmbulanciaDto);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({ summary: 'Delete a ambulance' })
  @ApiResponse({ status: 200, description: 'The ambulance has been successfully deleted.', type: Ambulancia })
  remove(@Param('id') id: string) {
    return this.ambulanciaService.remove(+id);
  }*/
}
